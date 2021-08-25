import { MongoClient } from 'mongodb'

export async function connectToDB () {
  const client = await MongoClient.connect(
    'mongodb+srv://nextDB:nextDB@cluster0.3kw4a.mongodb.net/blog-site?retryWrites=true&w=majority'
  )
  return client
}