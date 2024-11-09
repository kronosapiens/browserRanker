import Link from 'next/link';

export default function () {
  const kronosapiensUrl = "https://kronosapiens.github.io";

  return (
    <div className="text-center p-3 bg-light">
      &copy; { new Date().getFullYear() } <Link href={kronosapiensUrl}>Iris Informatics</Link>
    </div>
  )
}
