import Login from "@/app/components/login/Login";
import '../../components/login/styles.scss';

export default function page() {
  return (
    <section className='loginWrapper'>
        <h1>
            <img src='' alt='댕냥살롱'/>
        </h1>

        <Login />
    </section>
  )
}
