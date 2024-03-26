import Base from '@/templates/Base'
import FormProfile from './_components/FormProfile'

export default function MyAccountPage() {
  return (
    <Base>
      <main>
        <code className="font-mono font-bold">
          src/app/minha-conta/page.tsx
        </code>
        <p>Configurações em relação a minha conta</p>
        <FormProfile />
      </main>
    </Base>
  )
}
