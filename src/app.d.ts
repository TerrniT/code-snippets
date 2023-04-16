declare namespace App {
}

interface ICodeSnippetInput {
  title: string;
  language: string;
  code: string;
}

interface ICodeSnippet {
  title: string;
  language: string;
  code: string;
  favorite: boolean;
}
