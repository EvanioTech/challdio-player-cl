import { HttpResponse } from "../models/http-response-model";


export const ok = async (data: any): Promise<HttpResponse> => ({
   
        statusCode: 200,
        body: data,
    
  
});

export const created = async (data: any): Promise<HttpResponse> => ({
  statusCode: 201,
  body: data,
});

export const noContent = async (): Promise<HttpResponse> => ({
  statusCode: 204,
  body: null,
});

export const badRequest = async (error: Error): Promise<HttpResponse> => ({
  statusCode: 400,
  body: error.message,
});