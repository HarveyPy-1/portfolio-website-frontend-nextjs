import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
// Configure dotenv before other imports
import { JSONLoader } from "langchain/document_loaders/fs/json";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { getEmbeddingsCollection, getVectorStore } from "../lib/astradb";
import { Redis } from "@upstash/redis";

async function generateEmbeddings() {
    await Redis.fromEnv().flushdb();

	const vectorStore = await getVectorStore();

	(await getEmbeddingsCollection()).deleteMany({});

	const loader = new JSONLoader("app/assets/portfolio_details.json");

	const docs = await loader.load();

	const splitter = new RecursiveCharacterTextSplitter({
		chunkSize: 500,
		chunkOverlap: 100,
	})

	const splitDocs = await splitter.splitDocuments(docs);

	await vectorStore.addDocuments(splitDocs);

	// console.log(docs);
}

generateEmbeddings();
