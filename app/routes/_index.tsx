export default function Index() {
  return (
    <div className="flex h-screen flex-col items-center gap-8">
      <h1 className="text-balance pt-[min(28rem,25vh)] text-5xl">
        The fastest LLM chat app
      </h1>
      <form className="w-full sm:max-w-3xl" method="post">
        <textarea
          aria-label="Message"
          className="h-24 w-full resize-none rounded-lg p-3"
          name="chat"
          placeholder="Type your message here..."
        />
      </form>
      <footer className="mt-auto p-4">
        <p>
          By sending a message, you agree to our Terms of service and have read
          our Privacy policy.
        </p>
      </footer>
    </div>
  );
}
