import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const corsOptions: {
  allowedMethods: string[];
  allowedOrigins: string[];
  allowedHeaders: string[];
  exposedHeaders: string[];
  maxAge?: number;
  credentials: boolean;
} = {
  allowedMethods: (process.env?.ALLOWED_METHODS || "GET, HEAD, PUT, PATCH, POST, DELETE, OPTIONS").split(","),
  allowedOrigins: (process.env?.ALLOWED_ORIGIN || "*").split(","),
  allowedHeaders: (process.env?.ALLOWED_HEADERS || "Content-Type, Authorization").split(","),
  exposedHeaders: (process.env?.EXPOSED_HEADERS || "").split(","),
  maxAge: (process.env?.MAX_AGE && parseInt(process.env?.MAX_AGE)) || undefined, // 60 * 60 * 24 * 30, // 30 days
  credentials: process.env?.CREDENTIALS == "true",
};
const getCorsHeaders = (origin: string) => {
  // Default options
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Methods": corsOptions.allowedMethods.join(","),
    "Access-Control-Allow-Headers": corsOptions.allowedHeaders.join(","),
    "Access-Control-Allow-Origin": ``,
  };

  // If no allowed origin is set to default server origin
  // if (!process.env.ALLOWED_ORIGIN || !origin) {
  //   return headers;
  // }

  if (corsOptions.allowedOrigins.includes("*") || corsOptions.allowedOrigins.includes(origin)) {
    headers["Access-Control-Allow-Origin"] = origin;
  }
  return headers;
};

export const RequestHelper = {
  getBaseRequestInfo: (req: NextRequest) => {
    const headersList = req.headers;

    function IP() {
      const FALLBACK_IP_ADDRESS = "0.0.0.0";
      const forwardedFor = headersList.get("x-forwarded-for");

      if (forwardedFor) {
        return forwardedFor.split(",")[0] ?? FALLBACK_IP_ADDRESS;
      }

      return headersList.get("x-real-ip") ?? FALLBACK_IP_ADDRESS;
    }

    const bean = {
      referer: headersList.get("referer"),
      ua: headersList.get("User-Agent"),
      lang: headersList.get("Accept-Language"),
      ip: IP(),
    };
    return bean;
  },
  getPostValue: async (req: NextRequest) => {
    let postValue: { [key: string]: any } | null = null;
    try {
      postValue = await req.json();
    } catch (e) {
      return null;
    }
    return postValue;
  },
  OPTIONS: async (request: NextRequest) => {
    // Return Response
    return NextResponse.json(
      {},
      {
        status: 200,
        headers: getCorsHeaders(request.headers.get("origin") || ""),
      },
    );
  },
  responseCORS: (req: NextRequest, data: any) => {
    const headers = getCorsHeaders(req.headers.get("origin") || "");

    return NextResponse.json(data, {
      status: 200,
      headers: headers,
    });
  },
};
