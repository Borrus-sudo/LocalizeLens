import { ActionFunction } from '@remix-run/node';
import { Form } from '@remix-run/react';
import '../app.css';

export let action: ActionFunction = async ({ request }) => {
  let formData = await request.formData();
  let prompt = formData.get('prompt');
  console.log({ prompt });
  return 'stuff';
};

export default function Index() {
  return (
    <>
      <Form method="POST">
        <div style={{ display: 'flex' }}>
          <div className="fixed wrapper block">
            <input name="prompt" type="text" />
          </div>
          <button className="accent block" type="submit">
            Submit
          </button>
        </div>
      </Form>
    </>
  );
}
