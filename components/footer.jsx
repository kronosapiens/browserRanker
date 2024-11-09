import Link from 'next/link';

export default function () {
  const kronosapiensUrl = "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3317445";

  return (
    <div className="text-center p-3 bg-light">
      &copy; { new Date().getFullYear() } <Link href={kronosapiensUrl} className="text-decoration-none">Iris Informatics</Link>
    </div>
  )
}
