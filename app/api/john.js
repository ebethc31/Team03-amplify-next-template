
import {query} from "@/lib/db";

export default function handler(req,res){
  res.status(200).json({name:"john doe"});
}