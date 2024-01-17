import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div className="image">
        <Image
          src="/mattsfacial.jpg"
          alt="Matt, with grey clay on his face"
          width={900}
          height={600}
          priority
        />
      </div>

      <p>
        <a href="https://www.teaganpresley.com/" target="_blank" rel="noreferrer">Check out the hot Teagan Presley getting a facial</a>
      </p>
    </main>
  )
}
