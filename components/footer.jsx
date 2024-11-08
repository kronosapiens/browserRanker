import Link from 'next/link';

export default function () {
  const kronosapiensUrl = "https://kronosapiens.github.io";

  return (
    <div className="text-center p-3 bg-light">
      &copy; { new Date().getFullYear() } <Link href={kronosapiensUrl}>Kronosapiens Labs</Link>
      <br></br>
      <Link href="/privacy.html" style={{ fontSize: "14px" }}>Privacy Policy</Link>
      &nbsp;·&nbsp;
      <Link href="mailto:support@zaratan.world" style={{ fontSize: "14px" }}>Contact Support</Link>
    </div>
  )
}
