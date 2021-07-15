import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import Head from "next/head";
import Header from "../components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Google Docs</title>
        <link
          href="data:image/x-icon;
          base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAD0hUKg9IVC
          //SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL
          /9IVC//SFQv/0hUL/9IVC//SFQv/0hUKg9IVC/
          /SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SF
          Qv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv
          /0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC/
          /SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//
          SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//////////////////////////////////SFQv/0hUL/9IV
          C//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/////////////////////////////////
          //////////////////////SFQv/0hUL/9IVC//SFQv/0hUL/
          9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv//////////////////////////////////////////////////////9IVC//SFQv/0hUL/9IVC//
          SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC///////////////////////////////////////////////////////0hUL/9IVC//SFQv/0hUL/9IVC//SFQ
          v/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC
          //SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQ
          v/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUKg9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUKgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=="
          rel="icon"
          type="image/x-icon"
        />
      </Head>
      <Header />
      <section className="bg-[#F8F9FA] pb-10 px-10">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between py-6">
            <h2 className="text-gray-700 text-lg">Start a new document</h2>
            <Button
              color="gray"
              buttonType="outline"
              iconOnly={true}
              ripple="dark"
              className="border-0"
            >
              <Icon name="more_vert" size="3xl" />
            </Button>
          </div>
          <div></div>
          <Image src="https://links.papareact.com/pju" layout="fill" />
        </div>
      </section>
    </div>
  );
}
