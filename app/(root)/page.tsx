import ClientComponent from "@/components/ui/ClientComponent";

export default function Home() {
  return (
    <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5">
      <div className="wrapper mx-auto grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="flex flex-col justify-center gap-8">
          <h1 className="h1-bold">Host, Connect: Your Events</h1>
          <p className="p-regular-20">Book with our global community!</p>
          <ClientComponent />
        </div>
      </div>
    </section>
  );
}
