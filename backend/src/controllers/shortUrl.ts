import express from "express";
import {urlModel} from "../model/shortUrl";
export const createURL = async (req: express.Request, res: express.Response) => {
    try {
        const {fullUrl} = req.body.fullUrl;
        const urlFound=await urlModel.find({fullUrl});
        if(urlFound.length>0){
            res.status(409);
            res.send(urlFound);
        }else{
            const shorturl = await urlModel.create({fullUrl});
            res.status(201).send(shorturl);
        }
    } catch (error) {
        res.status(500).send({error});
        
    }
};
export const getURL = async (req: express.Request, res: express.Response) => {
try {
    const shorturls=await urlModel.find({});
    if(shorturls.length>0){
        res.status(200).send(shorturls);
    }
    else{
        res.status(404).send({message:"No URL Found"});
    }

} catch (error) {
    
}
};
export const checkURL = async (req: express.Request, res: express.Response) => {

};
export const deleteURL = async (req: express.Request, res: express.Response) => {

};

