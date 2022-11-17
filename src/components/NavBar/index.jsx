import React from 'react'
import CartWidget from '../CartWidget';
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
    return ( 
    <ul> 
        <li>
        <NavLink className="nav__link" to='/'>
            <img className="imgmates" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5Ojf/2wBDAQoKCg0MDRoPDxo3JR8lNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzf/wAARCABAAEADASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAABAUAAwYH/8QAMxAAAgICAQIEBAMIAwEAAAAAAQIDBAURABIhBhMxQRQVUWEigYIWIzJCU2JxkZKis7H/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A4bycnH8KV8DTitWYo7GVsIJK9eRQyVoyNrI6nszEd1U9taYg7A4A1bA2HrpavzQY6pINxy2yQZB9URQXYf3Ben7jlixeGoWIkt5W1rt+7rRwj/IJdiR+Q4vkN7KWJ7MhsW5gplmlPU7BRoFmP0HbueFPg7UWKpZWcxpRtymMSA9Rj0SNso7gHpfX16G16cC5ovDUzKIreVq77HzK0cw/ySHUgfkeV2cDYWu9qhNBkasY3JLUJJjH1dGAdR/cV6fueHWPB15c1bxdS1StSVK3xM0glMUca/h9WlCgH8S/bv68RxS2sbe64JngtQOQJIpNFWHY6YH/AOcAfk4/nSvn6ctqtFHXytdDJYrxqFSzGBtpEUdlYDZZR21tgBojiDgNfDlaCW89m4gkqUYmszRsdCQLoKh+zOUX9W+A3bc963NbtyGSeZy8jn3Y+vHmAqrZ8N5hfjKtRnsVYmksFgGQiVioIB/mRD+ng7YCEKT8/wAOdD0Esnf/AKcBr4V8ZQeHsLYgXFwTZAu4hsFQP3ciaZXP86hlQ9JBBBYbGhxJZ8Q5SfHfLBakixoUqtKNj5SgyGT0JOyGP8R22u29c3n7JQXcn4SyLw0q+CXG1pMhOGjAJRWeTrUHqJIXROvccaLjcXPft5TApiZL+Qx9d6ccEEbQxyJII7XkxShQWCqGAYAnqOuBzbHeK8tQsXp1mEz3kCWDKD1OB6EMCGUj7EcJyefozeEaGFo15UkjkMk5lRCA2lG1b+I7PUfbQbpPUFBHR6eKrwZKzDQjwNyZMzCMq7Va8aR0jDGWARiyooYyBih31L+XFVnCeHP2Ou46lJjvmM8U+Tqs4Js+Wsn7tFbp10mFGPSW3th+HgcupW56NuG3UkMc8Lh43Hsw7jh/iOtBFeSzSQR1L0K2YYwdiMNsMg+yuHX9O+WrgIWUH59hxsb0ZZNj/pwnP1VreG8QvxlW2yWLUSyVyxCoBEwUkgfzO5/VwBKC+d4Yy8SEdcU9aywP9NfMjJ/5Sp/vifjPw/dhp5DpuE/BWY2r2tDZEbduoD3KnTgfVRwXJUpsbemp2QPMibW1O1YeoZT7qQQQfcEHgDcc1fC2bt1YrMFB2hlXqjYsq9Q2RsbPp2PE3Nh4gz+Vw2QXFUrQjr0q8MKqIUI6hGvWRsE93LH8+APlMTD4Zo11yON+Mu24y3mySkQQ9gehQhBZ1DDZJ0CdaOtnL80mQydrN+FWmyD+ZNRvosbhQu1mjYkEAD0MA/2eZvgTji+vk+GMRE5HXLPZsqB/Tby4wf8AlE/+uAY2jNkr0NOsB5kra2x0qj1LMfZQAST7AE8K8QXYbmQ6aZPwVaNa9XY0TGvbqI9ix25H1Y8BZx5Tt1stTixuWmWCaBemneYEhB6+VJrv0b9GGyuyO4P4UfJwCshj7eNnEN2Exsyh0OwyyKfRlYdmU+xBIPGfzXG344fnlKzJZijWIWak6xmRFACh1ZWBIAA6gR2A2Ce/BKGbv0YPhkkSap1dRq2Y1li37kKwIU+2xo/fl/zHCzJqzgfKb60rjx/+gk4FWSykM1KLH46oalJHMpV5fMklk1rqdtAHQ7AAAAE+5JIuPx9vJTmGlCZGVS7nYVY1HqzMeyqPckgDh/zDDQpqtgfNb63bjyf+Yj5RkM3evQfDPIkNQN1CrWjWKLfsSqgBj7dR2fvwCrlutiacuNxMyzzTr03LyAgMvr5UW+/Rv1Y921rsB+JHycnA/9k=" alt="" width={60}/>
            </NavLink>
        </li>
        <li>
            <NavLink className="nav__link" to='/productos'>Productos</NavLink>
        </li>
        <li>
            <NavLink className="nav__link" to='/detalle'>Mayoristas</NavLink>
        </li>
        
        <li>
            <NavLink className="nav__link" to='cart'><CartWidget/></NavLink>
        </li>
        
        
    </ul>

    );
}

export default NavBar
