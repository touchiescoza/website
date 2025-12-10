import Image from "next/image";
import { Box, Card, Inset, Text} from "@radix-ui/themes";
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <div>
        <div >        
          <h1 className="align-items:center justify-center flex text-2xl p-3 m-3">Welcome to Touchies!</h1>
          <h2 className="text-lg">Latest News</h2>
        </div>
        <div>
          <Card>
            <img/>
            <p>{/*title*/}Touch Rugby Tournament</p>
            <Link href="/">{/*link this to news page */}More on this News</Link>
          </Card>
        </div>
        <div className="p-3 m-3">
          <Box maxWidth="240px">
            <Card size="2">
            <Inset clip="padding-box" side="top" pb="current">
              <img src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="Bold typography"
                style={{
                  display: "block",
                  objectFit: "cover",
                  width: "100%",
                  height: 140,
                  backgroundColor: "var(--gray-5)",}}
                />
                <Text as="p" size="3" >{/*title*/}Touch Rugby at zoolake</Text>
                <Link href="/">{/*link this to news page */} More on this News</Link>
            </Inset>
          </Card>
          </Box>
        </div>

        <div className="p-3 m-3">
          <Box maxWidth="240px">
            <Card size="2">
            <Inset clip="padding-box" side="top" pb="current">
              <img src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="Bold typography"
                style={{
                  display: "block",
                  objectFit: "cover",
                  width: "100%",
                  height: 140,
                  backgroundColor: "var(--gray-5)",}}
                />
                <Text as="p" size="3">{/*title*/}Touch Rugby at zoolake</Text>
                <Link href="/">{/*link this to news page */} More on this News</Link>
            </Inset>
          </Card>
          </Box>
        </div>
      </div>
    </main>
  );
}
