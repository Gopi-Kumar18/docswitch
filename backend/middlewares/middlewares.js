// import { cors,helmet,rateLimit,express,session,MongoStore,dotenv } from '../utils/coreModules.js'

// dotenv.config();

// export const applyMiddlewares = (app) => { 

//   app.use(helmet());

//    app.use(cors({
//     origin: process.env.CLIENT_ORIGIN,
//     // origin: process.env.SECURE_CLIENT_ORIGIN,
//     credentials: true,
//   }));

    
//   app.use(express.json());

//   const limiter = rateLimit({
//     windowMs: 30 * 60 * 1000,
//     max: 50,
//     message: "Too many requests, please try again later."
//   });
//   app.use(limiter);

  
//   app.set('trust proxy', 1);
//   app.use(session({
//   secret: process.env.SESSION_SECRET, 
//   resave: false,
//   saveUninitialized: false,
//   rolling: true,
//   store: MongoStore.create({
//     mongoUrl: process.env.MONGODB_URI,
//     collectionName: 'sessions'
//   }),
//   cookie: {
//     maxAge: 1000 * 60 * 10, 
//     httpOnly: true,
//     secure: process.env.NODE_ENV === 'production',
//     sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
//   }
// }));

// };


import { cors, helmet, rateLimit, express, session, MongoStore, dotenv } from '../utils/coreModules.js'
import { getClientIpFromReq } from '../utils/ipUtils.js';

dotenv.config();

export const applyMiddlewares = (app) => {

  app.use(helmet());

  app.use(cors({
    // origin: process.env.CLIENT_ORIGIN,
    origin: process.env.SECURE_CLIENT_ORIGIN,
    credentials: true,
  }));

  app.use(express.json());

  // Trust one proxy hop (safer than `true`). Set to a number or specific IPs
  // depending on your infra. If you have multiple trusted proxies, change accordingly.
  app.set('trust proxy', 1);

  // Rate limiter that uses the same canonical IP extractor used elsewhere
  const limiter = rateLimit({
    windowMs: 30 * 60 * 1000,
    max: 50,
    message: "Too many requests, please try again later.",
    // Use our canonical IP for key generation so rate-limiter and token-ip logic align
    keyGenerator: (req /*, res */) => {
      return getClientIpFromReq(req) || req.ip || req.socket?.remoteAddress || '';
    }
  });
  app.use(limiter);

  app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    rolling: true,
    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URI,
      collectionName: 'sessions'
    }),
    cookie: {
      maxAge: 1000 * 60 * 10,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
    }
  }));

};
