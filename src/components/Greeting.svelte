<script>
    const day = new Date()
    const hour = day.getHours()
    let greeting = ''
    if (hour < 12) {
        greeting = 'Good moring'
    }
    if (hour > 12 && hour < 18) {
        greeting = 'Good afternoon'
    }
    else greeting = 'Good night'
    
</script>

<h1>
    <div class="text-white font-bold text-6xl">
        {greeting}
    </div>
</h1>