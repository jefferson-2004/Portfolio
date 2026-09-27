export function ProfileSection() {
  const profile = {
    "name": "JEfferon A. Ando",
    "course": "BSIT 3B",
    "email": "jefferon.ando@gmail.com"
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-lg text-zinc-400">
      My Profile: {profile.name} - {profile.course} - {profile.email}
    </section>
  )
}