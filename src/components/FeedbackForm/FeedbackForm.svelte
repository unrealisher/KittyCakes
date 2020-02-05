<div class='form'>
    <ul class='list'>
        <li class='item'>
            <Input
                    bind:value = {obj.name}
                    params = {{
                        label: 'Как к вам обращаться:',
                        placeholder: 'Софья Петровна'
                    }}
            />
        </li>
        <li class='item'>
            <Input
                    bind:value = {obj.phoneNumber}
                    params = {{
                        label: 'Номер телефона:',
                        placeholder: '+7-911-988-43-65'
                    }}
            />
        </li>
        <li class='item'>
            <Input
                    bind:value = {obj.text}
                    params={{
                        label: 'Текст сообщения:',
                        placeholder: 'Напишите свои пожелания',
                        multilines: true
                    }}
            />
        </li>
        <li class='item'>
            <Button params={{
                text: 'Отправить',
                size: 'm',
                color: 'magenta',
                onClick: onSubmit
            }}/>
        </li>
    </ul>
</div>

<style>
    .form {
        padding: var(--gap-size-xl);

        border: 1px solid var(--color-magenta);
        border-radius: var(--border-radius-xs);
    }

    .list {
        display: flex;
        flex-direction: column;
    }

    .item:not(:last-child) {
        margin-bottom: var(--gap-size-s);
    }
</style>

<script>
    import Input from '../Input/Input.svelte';
    import Button from '../Button/Button.svelte';

    let obj = {};

    const onSubmit = (e) => {
        e.preventDefault();
        fetch('/post', {
            method: 'post',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(obj)
        });
    }
</script>
