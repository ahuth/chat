export default function ChatIndex() {
  return (
    <div className="flex h-full flex-col items-center justify-end px-4 pt-4">
      <form className="w-full sm:max-w-3xl" method="post">
        <textarea
          aria-label="Message"
          className="h-24 w-full resize-none rounded-lg rounded-b-none p-3"
          name="chat"
          placeholder="Type your message here..."
        />
      </form>
    </div>
  );
}
