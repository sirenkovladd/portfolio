import { minify } from 'minify'
import { writeFile, mkdir } from 'node:fs/promises'
import { resolve } from 'node:path'

async function compress(file) {
  const data = await minify(resolve('.', file))
  await writeFile(resolve('.', 'dist', file), data)
}

async function main () {
  await mkdir('./dist', { recursive: true })
  await compress('index.html')
  await compress('main.css')
}

main().catch(console.error)
