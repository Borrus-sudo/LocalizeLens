import { ActionFunction } from '@remix-run/node';
import { Form, useActionData } from '@remix-run/react';
import { DallEAPIWrapper } from '@langchain/openai';
import translate from '@iamtraction/google-translate';

import '../app.css';

export let action: ActionFunction = async ({ request }) => {
  let formData = await request.formData();
  //@ts-ignor e
  let prompt: string = formData.get('prompt');
  console.log(prompt);
  const languages = [
    'hindi',
    'bengali',
    'marathi',
    'gujarati',
    'Malayalam',
    'Kannada',
    'Tamil',
  ];
  
  const tool = new DallEAPIWrapper({
    n: 1, // Default
    model: 'dall-e-3', // Default
    apiKey: process.env.OPENAI_API_KEY, // Default
  });
  const imageURL = await tool.invoke(
    prompt + `\n Convert this poster in Bengali.`
  );
  console.log(imageURL);
  // const responses = await Promise.all(
  //   languages.map((lang) => translate(prompt, { from: 'en', to: lang }))
  // );
  
  return imageURL;
};

export default function Index() {
  const data = useActionData<string>();
  return (
    <>
      <h2>Enter your prompt: </h2>
      <Form method="POST">
        <div className="fixed wrapper block">
          <textarea name="prompt" rows={15} cols={95}></textarea>
        </div>
        <button className="accent block" type="submit">
          Submit
        </button>
      </Form>
      <div className="block wrapper">
        <img src={data}></img>
      </div>
    </>
  );
}
