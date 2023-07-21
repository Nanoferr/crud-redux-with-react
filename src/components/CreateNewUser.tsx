import { Badge, Button, Card, TextInput, Title } from '@tremor/react';
import { useState } from 'react';
import { userUseHook } from '../hooks/userUseHook';

export function CreateNewUser () {

    const { addUser } = userUseHook()
    const [result, setResult] = useState<'ok'|'ko'| null>(null)
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        setResult(null)

        const form = event.target as HTMLFormElement
        
        const formData = new FormData(form)

        const name = formData.get('name') as string
        const email = formData.get('email') as string
        const github = formData.get('github') as string

        if (!name || !email || !github) {
          return  setResult('ko');
        }

        addUser({name, email, github})
        setResult('ok')
        form.reset()
    }

    return (
        <Card className='mt-14'>
            <Title>
                Create New User
            </Title>
            <form onSubmit={handleSubmit}>
                <TextInput name='name' placeholder='Editar Nombre'/>
                <TextInput name='email' placeholder='Editar Email'/>
                <TextInput name='github' placeholder='Editar Usuario de Github'/>
                <div>
                    <Button className='mt-15'
                    type='submit'>
                        Crear un Nuevo Usuario
                    </Button>
                    <span>
                            {result === 'ok' && <Badge className='bg-[#423] text-white'>Guardado</Badge>}
                            {result === 'ko' && <Badge className='bg-[#FF0000] text-white'>Error con los campos</Badge>}
                    </span>
                </div>
            </form>
        </Card>
    )
}