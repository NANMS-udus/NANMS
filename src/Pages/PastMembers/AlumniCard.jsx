import './AlumniCard.css';

export default function AlumniCard({details}) {
 return (
  <article class="alumnus-card">
   <div class="alumnus-top">
    <img alt="Dr. Hadiza Suleiman" class="alumnus-thumb"
     src="https://lh3.googleusercontent.com/aida-public/AB6AXuDP1HuKhgAWRbWw8zo_q6XW5FnZrq-WvaBIOWmoHdjffYm3j-N_bhPl_R9nKG1elYb2bl7FUzSv3mGWlMygaKU39xx4_92yOsqgl7_2V9sYws1hVayNWwxJz03LXcLYzqxrIo-QZIaueS3DaAhahHbKL3moe0Fz2vk_6Fwnf9G8_NKafw517VOv45aai9YWoYclv78mft_4lzQmHYB4jfXhXl0-Vm5yjTKFaXWW8SYI4bvpUoZ2Cl29" />
    <div class="alumnus-meta">
     <h4>Dr. Hadiza Suleiman</h4>
     <div class="alumnus-year">Class of 2015</div>
    </div>
   </div>
   <div class="alumnus-specialty">Consultant Cardiologist | Imperial College Trust, UK</div>
   <p class="alumnus-desc">Leading cardiovascular interventionist and clinical researcher with over 18
    peer-reviewed publications. Founded the Diaspora Clinical Webinar Series for NANMS members.</p>
  </article>
 );
};