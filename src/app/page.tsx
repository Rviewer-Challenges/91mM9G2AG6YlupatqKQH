import SidebarNav from '@/components/SidebarNav'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center">
        <SidebarNav />
      </div>
    </main>
  )
}

;