![cover](https://github.com/user-attachments/assets/0d97f88a-1928-4ed1-a096-4724f97f25a7)

# GitHub Blog

A personal blog for tracking GitHub issues in any public repository.

The purpose of this project was to learn about consuming an API using an HTTP client, understanding the impact of asynchronous requests in a React application, and effectively managing their side effects.

## Prerequisites

- Node.js
- Git
- GitHub

## Getting Started

- Clone the repository (`git clone git@github.com:rodrigofontesdev/blog.git`)
- Install dependencies (`npm install`)
- Copy .env.example file (`cp .env.example .env`)
- Add a GitHub token to the .env file, refer to the [How to Use](#how-to-use) section
- Run application (`npm run dev`)

## Features

- Fetch repository owner details, including avatar, follower count, and name
- Retrieve and filter issues from a repository
- Display issue content in a post-like format

## How to Use

### Get Your GitHub Token

1. Go to **GitHub Account Settings**
2. Click **Developer Settings** in the sidebar menu
3. Select **Personal access token**
4. Create a new **fine-grained personal access token**
5. Assign a descriptive name to your token, set an expiration date, authorize access to specific or all repositories
6. Grant **read-only** access to followers under **Account permissions**
7. Grant **read-only** access to issues and metadata for private repositories under **Repository permissions**
8. Add your GitHub access token to the .env file as an environment variable

### Track Any Repository

To track a different repository from your account, modify the `VITE_GITHUB_USERNAME` and `VITE_GITHUB_REPO` environment variables in the .env file. Note that accessing private repositories requires specific permissions. Refer to the [Get Your GitHub Token](#get-your-github-token) section for details.

To track any public GitHub repository, specify the desired username and repository name in the environment variables.

> [!CAUTION]
> GitHub imposes rate limits on its REST API to ensure fair usage and prevent service abuse.

## I've Learned

- Render Markdown content as HTML using [react-markdown](https://github.com/remarkjs/react-markdown)
- Prevent layout shifts by loading web fonts optimally
- Enhance user experience by displaying placeholders during content loading
- Implement strategies to significantly reduce Cumulative Layout Shift (CLS)

## Built With

- React
- TypeScript
- Styled Components

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details.
