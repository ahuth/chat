import {
  Form,
  redirect,
  useSubmit,
  type ClientActionFunctionArgs,
} from "@remix-run/react";
import {assert} from "smart-invariant";
import {createThread} from "~/models/thread";

export async function clientAction({request}: ClientActionFunctionArgs) {
  const formData = await request.formData();
  const prompt = formData.get("prompt");
  assert(prompt);
  const thread = createThread(String(prompt));
  return redirect(`/chat/${thread.id}`);
}

export default function ChatIndex() {
  const submit = useSubmit();
  return (
    <div className="flex h-full flex-col items-center justify-end px-4 pt-4">
      <Form className="w-full sm:max-w-3xl" method="post">
        <textarea
          aria-label="Message"
          className="h-24 w-full resize-none rounded-lg rounded-b-none p-3"
          name="prompt"
          onKeyDown={(event) => {
            if (event.key === "Enter" && !event.shiftKey) {
              event.preventDefault();
              if (event.currentTarget.value.trim()) {
                submit(event.currentTarget.form);
              }
            }
          }}
          placeholder="Type your message here..."
          required
        />
      </Form>
    </div>
  );
}
