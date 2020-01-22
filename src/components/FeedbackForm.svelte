<div class='form'>
    <Input
            bind:value = {obj.name}
            params = {{
                label: 'Как к вам обращаться:',
                placeholder: 'Софья Петровна'
            }}
    />
    <Input
            bind:value = {obj.phoneNumber}
            params = {{
                label: 'Номер телефона:',
                placeholder: '+7-911-988-43-65'
            }}
    />
    <label>
        Текст сообщения:
        <textarea bind:value={obj.text}></textarea>
    </label>
    <button on:click={onSubmit}>Отправить</button>
</div>

<style>
    .form {
        display: flex;
        flex-direction: column;
    }
</style>

<script>
    import Input from './Input.svelte';

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
