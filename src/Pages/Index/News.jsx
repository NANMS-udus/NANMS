import { useContext } from 'react';
import './News.css';
import { GenContext } from '../../MyContexts/GenContexts'
import dayjs from 'dayjs';
import { Link } from 'react-router';

export default function News() {

  const {news} = useContext(GenContext)

  console.log(news);

  const newsSrtd = news.sort((a, b) => dayjs(b).valueOf() - dayjs(b).valueOf())

  console.log(newsSrtd);
  
  
 return (
  <section id="news">
   <div className="home-section-header">
    <h2 className="text-headline-lg">Latest News</h2>
    <p className="text-secondary text-body-md">Stay updated with our recent activities, announcements, and
     health outreach programs.</p>
   </div>
   {
    news.length 
    ? <div className="news-grid">
    <article className="index-news-card">
     <img alt="Medical Outreach" className="news-img"
      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBVvShCPpwxfwNKTqFRfIDHLtQzhk0T9edNUwbtaq4DcGZOFGhZoynAEmJFdY8fZrNXB6LvMjCjKM1CYsXXjx1JOGf6qFCEQ_FSpWPwwYCHrBSkoWaulPM7QsJrERhsEcX2cHxSol_oaRevaokZULx14BbKAcl3UgUo2GH6RrLKbT1b9UMIVgfxp03xjDegGHP3Pc4X_p3QfZt83XGirlQ_9P0YXdDw10O5RUVsKoPn046Fc5sd3gi" />
     <div className="news-content">
      <span className="news-date">Oct 15, 2023</span>
      <h3 className="news-title">Annual Free Medical Outreach Concludes Successfully</h3>
      <p className="news-excerpt">Over 500 residents received free medical screenings and treatments
       during our week-long rural health campaign.</p>
     </div>
    </article>
    <article className="index-news-card">
     <img alt="Symposium" className="news-img"
      src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-KSGBQoxYhpvL0Xz-yWrpfnkdXroY5ASrAZUDXUDIrtYba50OGBbMNkZSRTUqT8NUmqkpls7On8eWM29EDfluR7mRfz2IOARM43f-g5HkVYD7ZUwPSGZaydC6W04GIBYIDk3EOI_ngS0w8OD9j0OkhFp97PzIg27i2oIgcOHXaOKWkz3BVEW0cXXQu91HPGdH629a4DPeKeKOaYRI6o3KVmAKRpk7obus3D0aEYfV8bNWdaP6hInf" />
     <div className="news-content">
      <span className="news-date">Sep 28, 2023</span>
      <h3 className="news-title">NANMS Hosts Regional Health Symposium</h3>
      <p className="news-excerpt">Medical students and professionals gathered to discuss emerging trends
       in tropical medicine and public health.</p>
     </div>
    </article>
    <article className="index-news-card">
     <img alt="New Library" className="news-img"
      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtIzaxWUfDocf3ZqXrm4oybLrceYJYG72Ib4TZHoRlY0PPllsFxl_-W3urDVzIlcnu3SV34vLwh1GxW_16bk-XixqzG_tDHlXuiwzGxmTI3cCHeJXpyo_c6YZKodCcaGTbMgYrD_-JCAuszRSiX75pvxFKjoD0wxzI0OMXftgqJ-hd2KKqufStfbezFzURMDxu6Op6RZB9E7Z--Xq8fHOjfx2dBZbu5MoWlUHOGudZsa9nginFhmoO" />
     <div className="news-content">
      <span className="news-date">Aug 10, 2023</span>
      <h3 className="news-title">New Digital Library Access for Members</h3>
      <p className="news-excerpt">Members can now access a wide range of premium medical journals and
       research papers through our new digital portal.</p>
     </div>
    </article>
   </div>
   : <h2 style={{
    color: 'grey',
    textAlign: 'center'
   }}>
    No news found
   </h2>
   }
   <Link 
   to={'/news'} 
   style={{
    color: 'var(--primary)',
    textDecoration: 'underline',
    textAlign: 'center',
    display: 'block',
    marginTop: '24px'
   }}
   >
    See all news
   </Link>
  </section>
  
 );
};