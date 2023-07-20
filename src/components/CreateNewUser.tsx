import { Button, Card, TextInput, Title } from '@tremor/react';
import { userUseHook } from '../hooks/userUseHook';

export function CreateNewUser () {

    const { addUser } = userUseHook()
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const form = event.target as HTMLFormElement
        
        const formData = new FormData(form)

        const name = formData.get('name') as string
        const email = formData.get('email') as string
        const github = formData.get('github') as string

        addUser({name, email, github})
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
                </div>
            </form>
        </Card>
    )
}