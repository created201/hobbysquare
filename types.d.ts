type ApiEnvName<T extends string> = T
type ApiEnvOption<Key extends ApiEnvName, T extends object> = Record<Key, T>
declare module "types-config" {
    type NextAuthGoogleProviderOption = ApiEnvOption<
        "google",
        { clientId?: string; clientSecret?: string }
    >
    type NodeMailerProviderOption = ApiEnvOption<
        "nodemailer",
        { user?: string; pass?: string }
    >
    type DatabaseConfigOption = ApiEnvOption<
        "database",
        {
            uri: string
            name: string
            username: string
            password: string
        }
    >
    type BaseUriConfigOption = ApiEnvOption<
        "baseUri",
        {
            development: string
            production: string
        }
    >
}
