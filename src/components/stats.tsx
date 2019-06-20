import React, { Component } from 'react'
import parse from 'csv-parse'
import dateformat from 'dateformat'

import styles from './stats.module.css'

import csvHydraHitsPerMonth from 'raw-loader!../stats/hydra/hits-per-month.csv'
import csvOathkeeperHitsPerMonth from 'raw-loader!../stats/oathkeeper/hits-per-month.csv'
import csvKetoHitsPerMonth from 'raw-loader!../stats/keto/hits-per-month.csv'
import VerticalDivider from './vertical-divider'
import AnimatedCounter from './animated-counter'

const countGitHubStars = (state: StateTypes) =>
  (Object.keys(state.github) as Array<keyof GitHub>)
    .map((repo) => state.github[repo])
    .reduce((p: number, n: number) => p + n, 0)

const countDockerImagePulls = (state: StateTypes) =>
  (Object.keys(state.docker) as Array<keyof Docker>)
    .map(repo => state.docker[repo])
    .reduce((p: number, n: number) => p + n, 0)

const analyze = (raw: string): Promise<number[][]> =>
  new Promise((resolve, reject) => {
    parse(raw, { cast_date: true }, (err, csv) => {
      if (err) {
        reject(err)
        return
      }

      // Remove header
      let data: any = csv.slice(1)


      // Sort by date
      data.sort((a: number[], b: number[]) => new Date(a[0]).getTime() - new Date(b[0]).getTime())

      // Now that it's sorted, get the first (oldest) date
      // const then = new Date(data[0][0])

      // Remove dupes, transform dates to integer keys
      data = uniq(data).map((v: any) => [(new Date(v[0])).getTime(), parseInt(v[1])])

      resolve(data)
    })
  })

const uniq = (raw: any) => {
  const obj: { [key: string]: number } = {}
  for (let i = 0, len = raw.length; i < len; i++) {
    obj[raw[i][0]] = raw[i]
  }

  const result = []
  for (const key in obj) {
    result.push(obj[key])
  }
  return result
}
//


const stats = (state: StateTypes) => [
  {
    title: 'Requests secured',
    amount: state.requests.amount,
    description: dateformat(state.requests.date, 'mmmm yyyy'),
  },
  {
    title: 'Docker pulls',
    amount: countDockerImagePulls(state),
    description: 'Overall',
  },
  {
    title: 'GitHub stars',
    amount: countGitHubStars(state),
    description: 'Overall',
  },
]

interface PropTypes {
}

type GitHubRepos = 'hydra' |
  'fosite' |
  'ladon' |
  'dockertest' |
  'oathkeeper' |
  'keto' |
  'hive' |
  'docs' |
  'examples'

type DockerImages = 'oryd/hydra' |
  'oryam/hydra' |
  'oryd/oathkeeper' |
  'oryd/keto'

type GitHub = {
  [T in GitHubRepos]: number
}

type Docker = {
  [T in DockerImages]: number
}

interface StateTypes {
  docker: Docker
  github: GitHub
  requests: {
    amount: number,
    date: Date,
  },
}

class Stats extends Component<PropTypes, StateTypes> {
  state = {
    requests: { amount: 0, date: new Date() },
    docker: {
      ['oryd/hydra']: 3031913,
      ['oryam/hydra']: 84275,
      ['oryd/oathkeeper']: 478875,
      ['oryd/keto']: 189907,
    },
    github: {
      hydra: 6307,
      fosite: 1230,
      ladon: 1452,
      dockertest: 786,
      oathkeeper: 1373,
      keto: 292,
      hive: 24,
      docs: 8,
      examples: 70,
    },
  }

  fetchGitHubStars = (repo: GitHubRepos) => {
    const url = `https://corsar.herokuapp.com/repos/ory/${repo}?__host=api.github.com&__proto=https`
    // const url = `https://api.github.com/repos/ory/${repo}`
    fetch(url)
      .then(body => body.json())
      .then(({ stargazers_count }) => {
        this.setState({
          github: {
            [repo]: stargazers_count,
            ...this.state.github,
          },
        })
      })
      .catch(err =>
        console.error(
          `An error occurred while trying to fetch "${url}": ${err}`,
        ),
      )
  }

  fetchDockerImagePulls = (repo: DockerImages) => {
    fetch(
      `https://corsar.herokuapp.com/v2/repositories/${repo}/?__host=hub.docker.com&__proto=https`,
    )
      .then(body => body.json())
      .then(({ pull_count }: { pull_count: number }) => {
        this.setState({
          docker: {
            [repo]: pull_count,
            ...this.state.docker,
          },
        })
      })
      .catch(err =>
        console.error(
          `An error occurred while trying to fetch "${repo}": ${err}`,
        ),
      )
  }

  fetchRequests() {
    Promise.all([
      analyze(csvHydraHitsPerMonth),
      analyze(csvOathkeeperHitsPerMonth),
      analyze(csvKetoHitsPerMonth),
    ]).then((services: number[][][]) => {
      const requests: { [key: number]: number } = {}

      services.forEach((rows) => {
        rows.forEach((row) => {
          requests[row[0]] = requests[row[0]] ? requests[row[0]] + row[1] : row[1]
        })
      })

      let max: number[] = [0, 0]
      Object.keys(requests).forEach((date: string) => {
        const amount = requests[parseInt(date)]

        if (amount > max[1]) {
          max = [parseInt(date), amount]
        }
      })

      console.log(max, requests)

      this.setState(() => {
        return ({
          requests: {
            amount: max[1],
            date: new Date(max[0]),
          },
        })
      })
    })
  }

  componentDidMount() {
    (Object.keys(this.state.docker) as Array<keyof Docker>).forEach((repo) => {
      this.fetchDockerImagePulls(repo)
    });

    (Object.keys(this.state.github) as Array<keyof GitHub>).forEach((repo) => {
      this.fetchGitHubStars(repo)
    })

    this.fetchRequests()
  }

  render() {
    return (
      <div className={styles.stats}>
        <div className="container-fluid">
          <div className="row">
            <VerticalDivider padding={96} />
            <div className="col-lg-offset-1 col-lg-4  col-md-offset-1 col-md-10  col-sm-offset-1 col-sm-10">
              <h3>
                Adoption rate
              </h3>
              <p>
                All of our security-relevant code is open source, and our flows and
                concepts are rooted in open standards and industry best practices.
              </p>
            </div>
            <div className="mobile-offset-32 col-lg-offset-2 col-lg-4  col-md-offset-1 col-md-10  col-sm-offset-1 col-sm-10">
              <div className={styles.items}>
                {stats(this.state).map(({ title, amount, description }) => (
                  <div key={title} className={styles.item}>
                    <div className={styles.title}>
                      {title}
                    </div>
                    <div className={styles.amount}>
                      <AnimatedCounter countTo={amount} />
                    </div>
                    <div className={styles.description}>
                      {description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Stats
