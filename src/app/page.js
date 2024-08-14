import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div>
        <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <div>next-auth</div>
      </div>

      <div className="flex items-center justify-around gap-4 mt-16">
        <div className="card-link">
          <h2>
            admin signup <span>-&gt;</span>
          </h2>
          <a
            href="/admin/auth/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          ></a>
        </div>
        <div className="card-link">
          <h2>
            admin signin <span>-&gt;</span>
          </h2>
          <a
            href="/admin/auth/signin"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          ></a>
        </div>
        <div className="card-link">
          <h2>
            admin forget password <span>-&gt;</span>
          </h2>
          <a
            href="/admin/auth/forget-password"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          ></a>
        </div>
        <div className="card-link">
          <h2>
            user signin with otp <span>-&gt;</span>
          </h2>
          <a
            href="/user/auth/signin"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          ></a>
        </div>
      </div>
    </>
  );
}
