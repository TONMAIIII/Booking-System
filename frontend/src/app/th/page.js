'use client'
import Image from "next/image";
import { useRouter } from 'next/navigation';
import EditIcon from '../../../public/edit.png';
import Logo from '../../../public/logo.png';
import LanguageSwitcher from '../LanguageSwitcher';

const ThPage = () => {
  const router = useRouter();
return (
    <main>  
    <div>
      <a className="logo-brand" aria-label="หน้าหลัก">
        <Image className="logo-main" src={Logo} alt="mysticnetwork_logo" height="auto" width="auto"/>
      </a>
      <h1 className="title">ระบบจองคิว Online</h1>
      <h2 className="subtitle">โรงพยาบาล ABC</h2>   
      <a className="button-home" type="button" onClick={() => router.push('en/login')}>       
        <button className="text-colour-button-a">
          <Image className="icon-main" src={EditIcon} alt="edit_icon" />
          <span className="button-text">จองเลย</span>
        </button>
      </a>   

      <LanguageSwitcher Lang="en" />
    </div>  
  </main>
  );
}

export default ThPage;