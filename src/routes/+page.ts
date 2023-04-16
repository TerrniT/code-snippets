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
    ]
  };
}) satisfies PageLoad;
