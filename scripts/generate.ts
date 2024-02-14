import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
// Configure dotenv before other imports
import { JSONLoader } from "langchain/document_loaders/fs/json";
// import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { getEmbeddingsCollection, getVectorStore } from "../lib/astradb";
import { Redis } from "@upstash/redis";

async function generateEmbeddings() {
    await Redis.fromEnv().flushdb();

	const vectorStore = await getVectorStore();

	(await getEmbeddingsCollection()).deleteMany({});

	const loader = new JSONLoader("app/assets/portfolio_details.json");

	const docs = await loader.load();

	// const splitter = RecursiveCharacterTextSplitter.fromLanguage("js");

	// const splitDocs = await splitter.splitDocuments(docs);

	await vectorStore.addDocuments(docs);

	// console.log(docs);
}

generateEmbeddings();
