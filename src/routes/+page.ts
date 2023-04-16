import type { PageLoad } from './$types';

export const load = (() => {
	//Fetch data from API
	return {
		snippets: [
			{
				title: 'Read ANY number from stdin',
				language: 'Rust',
				code: `fn scann<T: FromStr>() -> T where <T as FromStr>::Err: std::fmt::Debug {
    let mut number = String::new();

    io::stdin().read_line(&mut number).expect("IO error");

    number.trim().parse::<T>().expect("Input error")
}
}`,
				favorite: true
			},
			{
				title: 'Hello World in Axum/Rust',
				language: 'Rust',
				code: `
use axum::{
  routing::get,
  Router,
};

#[tokio::main]
async fn main() {
  // build our application with a single route
  let app = Router::new ().route('/', get(|| async{'Hello, World!'}));

  // run it with hyper on localhost:3000
  axum::Server::bind(& '0.0.0.0:3000'.parse().unwrap())
      .serve(app.into_make_service())
      .await.unwrap();
}
`,
				favorite: true
			},
			{
				title: 'Lucia OAuth github provider handler',
				language: 'Javascript',
				code: `
import {auth} from './lucia.js';

try {
  await auth.createUser({
    primaryKey: {
      providerId: 'github',  // provider id = authentication method
      providerUserId:
          githubUserId,  // the user's Github user id is unique to the user
      password: null
    },
    attributes: {}
  });
} catch {
  // invalid input
}
`,
				favorite: true
			},
			{
				title: 'Get chanell statistics',
				language: 'Typescript',
				code: `
import{google} from 'googleapis';

export default async(_, res) = > {
  const auth = new google.auth.GoogleAuth({
    credentials : {
      client_email : process.env.GOOGLE_CLIENT_EMAIL,
      private_key : process.env.GOOGLE_PRIVATE_KEY
    },
    scopes : ['https://www.googleapis.com/auth/youtube.readonly']
  });

  const youtube = google.youtube({auth, version : 'v3'});

  const response = await youtube.channels.list(
      {id : 'UCZMli3czZnd1uoc1ShTouQw', part : 'statistics'});

  const channel = response.data.items[0];
  const {subscriberCount, viewCount} = channel.statistics;

  return res.status(200).json({subscriberCount, viewCount});
};
`,
				favorite: true
			}
		]
	};
}) satisfies PageLoad;
