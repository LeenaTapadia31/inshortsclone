import express from 'express'
import { getNews } from '../controllers/news_controllers.js'
const route = express.Router()
route.get('/news',getNews)
export default route