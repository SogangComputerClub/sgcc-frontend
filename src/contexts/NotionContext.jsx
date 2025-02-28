import { NotionAPI } from 'notion-client'

/*
const notion = new NotionCompatAPI(
  new Client({
    auth: import.meta.env.NOTION_ACCESS_TOKEN,
    baseUrl: "https://cloudflare-cors-anywhere.sgccofficial2024.workers.dev/?https://api.notion.com"
  })
)
*/

const notion = new NotionAPI({
    auth: import.meta.env.NOTION_ACCESS_TOKEN,
    apiBaseUrl: 'https://cloudflare-cors-anywhere.sgccofficial2024.workers.dev/?https://www.notion.so/api/v3'
});

export default notion;