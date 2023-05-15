export interface PusherConfig {
  appToken: string
}

export interface MariaConfig {
  port: number
  host: string
  user: string
  password: string
  database: string
}

export interface AppConfig {
  pusher: PusherConfig
  maria: MariaConfig
}
