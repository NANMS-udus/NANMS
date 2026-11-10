import { useNavigate } from 'react-router';
import './RegMain.css';
import { LGAs } from '../../../Utils/data';
import { useActionState, useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../../../MyContexts/AuthContext';
import dayjs from 'dayjs';
import check from '../../../assets/icons/check-circle.svg'
import eye from '../../../assets/icons/eye.svg'
import eyeOff from '../../../assets/icons/eye-off.svg'
import { UiContext } from '../../../MyContexts/UiContext';

export default function RegMain() {

  const [showResAdd, setShowResAdd] = useState(false)

  const [avatar, setAvatar] = useState({})

  const [posStatus, setPosStatus] = useState('past')

  const [pstngStatus, setPstngStatus] = useState('Completed')

  const [showPassword, setShowPassword] = useState(false)

  const [showPassword2, setShowPassword2] = useState(false)


  const {
    signUp,
    positions_held,
    setPositionsHeld,
    research_interests,
    setResearchIntrests,
    recent_postings,
    setRecentPostings
  } = useContext(AuthContext)

  const {
    showPopup
  } = useContext(UiContext)

  const [
    signUpResp,
    signUpAction,
    isSigningUp
  ] = useActionState(signUp, { success: null, message: '' })

  const postingNameElem = useRef(null)

  const postingDptmtsElem = useRef(null)

  const postingDurElem = useRef(null)

  const researchInputElem = useRef(null)

  const posTitleElem = useRef(null)

  const posHeldFromElem = useRef(null)

  const posHeldTillElem = useRef(null)

  const admNoElem = useRef(null)

  const admDateElem = useRef(null)

  const nanmsUidElem = useRef(null)

  const navigate = useNavigate()

  useEffect(() => {
    if (signUpResp.success) {
      showPopup('success', 'signed up successfully')
      navigate('/members/reg-success')
    }

    if (signUpResp.success === false) {
      showPopup('error', signUpResp.message)
    }
  }, [signUpResp])

  useEffect(() => {
    if (isSigningUp) {
      showPopup('pending', 'signing in')
    }
  }, [isSigningUp])




  function addNewPosting() {
    const postingName = postingNameElem.current.value;
    const postingDuration = postingDurElem.current.value;
    const postingDepartments = postingDptmtsElem.current.value

    if (!postingName || !postingDuration || !postingDepartments) {
      console.log('nothing');

      return
    }

    if (postingName && postingDuration && postingDepartments) {
      setRecentPostings((prev) => {
        const newPosting = {
          postingName: postingNameElem.current.value,
          postingDuration: postingDurElem.current.value,
          postingDepartments: postingDptmtsElem.current.value.split(', '),
          postingStatus: pstngStatus
        }

        console.log(newPosting);

        postingDptmtsElem.current.value = ''
        postingDurElem.current.value = ''
        postingNameElem.current.value = ''
        setPstngStatus('Completed')


        return [newPosting, ...prev]
      })


    }
  }


  function addNewPos() {
    const posTitle = posTitleElem.current.value;
    const posHeldFrom = posHeldFromElem.current.value;
    const posHeldTill = posHeldTillElem.current.value

    /* TO USE POPUP */

    if (!posTitle || !posHeldFrom || !posHeldTill) {
      console.log('nothing');

      return
    }

    if (posStatus === 'present' && dayjs().isAfter(posHeldTill)) {
      console.log('invalid end date');

      return
    }

    if (posStatus === 'past' && dayjs().isBefore(posHeldTill)) {
      console.log('invalid end date');

      return
    }

    if (dayjs(posHeldTill).isBefore(posHeldFrom) || posHeldTill === posHeldFrom) {
      console.log('invalid dates');

      return
    }

    if (posTitle && posHeldFrom && posHeldTill && posStatus) {
      setPositionsHeld((prev) => {
        const newPos = {
          title: posTitleElem.current.value,
          heldFrom: posHeldFromElem.current.value,
          heldTill: posHeldTillElem.current.value,
          posStatus
        }

        console.log(newPos);

        posTitleElem.current.value = ''
        posHeldFromElem.current.value = ''
        posHeldTillElem.current.value = ''


        return [newPos, ...prev]
      })


    }
  }

  return (
    <main class="main-container">
      <div class="page-header">
        <h1 class="page-title">Member Registration</h1>
        <p class="page-subtitle">Join the National Association of Niger State Medical Students</p>
      </div>
      <form action={signUpAction} class="registration-form">
        <div class="form-section">
          <h2 class="section-title">Personal Information</h2>
          <div class="reg-form-grid">
            <div class="form-group full-width">
              <label for="fullName">Full Name</label>
              <input name='fullname' id="fullName" placeholder="Dr. Jane Doe (First name first)" required type="text" />
            </div>
            <div class="form-group">
              <label for="email">Email Address</label>
              <input name='email' id="email" placeholder="jane.doe@university.edu" required type="email" />
            </div>
            <div class="form-group">
              <label for="email">Gender</label>
              <select name="gender" id="gender">
                <option value="">
                  None
                </option>
                <option value="Male">
                  Male
                </option>
                <option value="Female">
                  Female
                </option>
              </select>
            </div>
            <div class="form-group">
              <label for="phone">Phone Number</label>
              <input name='phone' id="phone" placeholder="+234 000 000 000" type="tel" required />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <div style={{ position: 'relative' }}>
                <input name='password' id="password" placeholder="XXXX XXX XXXX" type={showPassword ? 'text' : "password"} required />
                <img style={{ position: 'absolute', width: '20px', top: '24%', right: '6px', }} onClick={() => { setShowPassword(!showPassword) }} src={showPassword ? eyeOff : eye} alt={showPassword ? 'hide' : 'show'} />
              </div>
            </div>
            <div class="form-group">
              <label for="password">Retype Password</label>
              <div style={{ position: 'relative' }}>
                <input name='password2' id="password-2" placeholder="XXXX XXX XXXX" type={showPassword2 ? 'text' : "password"} required />
                <img style={{ position: 'absolute', width: '20px', top: '24%', right: '6px', }} onClick={() => { setShowPassword2(!showPassword2) }} src={showPassword2 ? eyeOff : eye} alt={showPassword2 ? 'hide' : 'show'} />
              </div>
            </div>
            <div class="form-group full-width">
              <label>Profile Photo</label>
              <label htmlFor='avatar' class="file-upload">
                <input
                  className='avatar-input'
                  type="file"
                  name="avatar"
                  id="avatar"
                  onChange={(e) => {
                    const files = e.target.files

                    if (files.length) {
                      setAvatar(files[0])

                      console.log(avatar);
                    }

                  }}
                />
                <span class="material-symbols-outlined"
                  style={{ fontSize: '32px', color: 'var(--outline)' }}>add_a_photo</span>
                <p style={{ color: 'var(--secondary)', marginTop: '8px' }}>
                  {
                    avatar.size && avatar.name
                      ? avatar.name
                      : 'Click to upload professional headshot'
                  }
                </p>
              </label>
            </div>
          </div>
        </div>
        <div class="form-section">
          <h2 class="section-title">Academic Profile</h2>
          <div class="reg-form-grid">
            <div class="form-group">
              <label for="LGA">LGA</label>
              <select name='LGA' id="LGA" required>
                <option disabled="" selected="" value="">Select LGA</option>
                {
                  LGAs.map((LGA) => {
                    return <option
                      key={crypto.randomUUID()}
                      value={LGA}
                      name="LGA"
                    >
                      {LGA}
                    </option>
                  })
                }

              </select>
            </div>
            <div class="form-group">
              <label for="admissionYear">Admission Date</label>
              <input ref={admDateElem} name='date_admitted' id="admissionYear" placeholder="Select Your Admission Date" type="date" required />
            </div>
            <div class="form-group">
              <label for="admission-no">Admission Number</label>
              <input ref={admNoElem} name='admission_no' id="admission-no" placeholder="Your admission number (10 Digits) " type="text" required minLength={10} maxLength={10}
                onChange={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, '')

                  const admDate = admDateElem.current.value

                  if (!admDate) {
                    e.target.value = e.target.value = ''

                    showPopup('err', 'please input your admission date')
                  }

                  const admNo = admNoElem.current.value

                  console.log(admDate, admNo);


                  if (admDate && admNo.split('').length === 10) {
                    console.log(`NANMS-${dayjs(admDate).format('YYYY')}-${admNo}`);

                    nanmsUidElem.current.value = `NANMS-${dayjs(admDate).format('YYYY')}-${admNo}`
                  }
                }}
              />
            </div>
            <div class="form-group">
              <label for="nanms-uid">NANMS Unique Id</label>
              <input ref={nanmsUidElem} name='NANMS_uid' id="nanms-uid" placeholder="Your unique NANMS Id" type="text" readOnly
              />
            </div>
            <div class="form-group full-width">
              <label for="clinicalLevel">Current Level</label>
              <select name='level' id="level" required="">
                <option disabled="" selected="" value="">Select Level</option>
                <option value="100 Level">100 Level</option>
                <option value="200 Level">200 Level</option>
                <option value="300 Level">300 Level</option>
                <option value="400 Level">400 Level</option>
                <option value="500 Level">500 Level</option>
                <option value="600 Level">600 Level</option>
              </select>
            </div>
          </div>
        </div>
        <div class="form-section">
          <h2 class="section-title">Professional Details</h2>

          <div style={{ marginBottom: '20px' }} class="reg-form-grid">

            <label>Positions held</label>

            <div class="form-group full-width">
              <label for="title">Title</label>
              <input ref={posTitleElem} name='title' id="position-title" placeholder="Position title" type="text" />
            </div>
            <div class="form-group">
              <label for="depertment">From</label>
              <input ref={posHeldFromElem} name='from' id="from" type="date" />
            </div>
            <div class="form-group">
              <label for="duration">Till</label>
              <input ref={posHeldTillElem} name='till' id="till" type="date" />
            </div>
            <div
              class="form-group full-width costom-radios-container"
            >
              <label className=''/* for="title" */>Position Status</label>
              <div className='radios-container' >
                <div className='costom-radio-wrapper'>
                  <label
                    for="present"
                    className='costom-radio'
                  >
                    <input name='posStatus' id="present" value='present' type="radio"
                      onChange={(e) => {
                        setPosStatus(e.target.value)
                      }}
                    />
                    <img className='check' src={check} alt="" />
                  </label>
                  <label htmlFor="present">Holding Currently</label>
                </div>
                <div className='costom-radio-wrapper'>
                  <label
                    htmlFor="past"
                    className='costom-radio'
                  >
                    <input name='posStatus' value='past' defaultChecked id="past" type="radio" />
                    <img className='check' src={check} alt="" />
                  </label>
                  <label htmlFor="past">Held in the past</label>

                </div>
              </div>

            </div>
            <div
              style={{ borderRadius: 'var(--stack-lg)' }}
              class="full-width tags-container"
            >
              {
                positions_held.map((pos) => {

                  return <div key={crypto.randomUUID()} class="tag">
                    {pos.title}
                    <span
                      class="material-symbols-outlined"
                      style={{ fontSize: '16px', cursor: 'pointer' }}
                      onClick={() => {
                        const index = positions_held.indexOf(pos)

                        setPositionsHeld((prev) => {
                          const newPos = prev
                          newPos.splice(index, 1)

                          return [...newPos]
                        })
                      }}
                    >
                      close
                    </span>
                  </div>
                })
              }
            </div>
            <div className='form-group full-width'>
              <button
                type='button'
                className='btn-primary'
                onClick={addNewPos}
              >
                Add Position
              </button>
            </div>
          </div>
          <div class="form-group full-width">
            <label for="bio">Professional Biography</label>
            <textarea name='bio' id="bio" className='reg-textarea'
              placeholder="Briefly describe your academic journey and professional aspirations..." required></textarea>
          </div>
        </div>
        <div class="form-section">
          <h2 class="section-title">Recent Postings</h2>
          <div class="reg-form-grid">
            <div class="form-group">
              <label for="posting-name">Name</label>
              <input ref={postingNameElem} name='posting-name' id="posting-name" placeholder="Rotation or Posting Name" type="text" />
            </div>
            <div class="form-group">
              <label for="depertment">Depertment(s)</label>
              <input ref={postingDptmtsElem} name='depertment' id="depertment" placeholder="e.g. Surgery, Medicine" type="text" />
            </div>
            <div class="form-group full-width">
              <label for="duration">Duration</label>
              <input ref={postingDurElem} name='duration' id="duration" placeholder="e.g. 12 Weeks" type="text" />
            </div>
            <div
              class="form-group full-width costom-radios-container"
            >
              <label className=''>Status</label>
              <div className='radios-container' >
                <div className='costom-radio-wrapper'>
                  <label
                    for="completed"
                    className='costom-radio'
                  >
                    <input name='pstngStatus' id="completed" defaultChecked value='Completed' type="radio"
                      onChange={(e) => {
                        setPstngStatus(e.target.value)
                      }}
                    />
                    <img className='check' src={check} alt="" />
                  </label>
                  <label htmlFor="completed">Completed</label>
                </div>
                <div className='costom-radio-wrapper'>
                  <label
                    htmlFor="ongoing"
                    className='costom-radio'
                  >
                    <input name='pstngStatus' value='Ongoing' id="ongoing" type="radio"
                      onChange={(e) => {
                        console.log(posStatus);

                        setPstngStatus(e.target.value)
                      }}
                    />
                    <img className='check' src={check} alt="" />
                  </label>
                  <label htmlFor="ongoing">Ongoing</label>
                </div>
                <div className='costom-radio-wrapper'>
                  <label
                    htmlFor="pending"
                    className='costom-radio'
                  >
                    <input name='pstngStatus' value='Upcoming' id="pending" type="radio"
                      onChange={(e) => {
                        setPstngStatus(e.target.value)
                      }}
                    />
                    <img className='check' src={check} alt="" />
                  </label>
                  <label htmlFor="ongoing">Upcoming</label>
                </div>
              </div>

            </div>
            <div style={{ borderRadius: 'var(--stack-lg)' }} className='tags-container full-width'>
              {
                recent_postings?.map((post) => {

                  return (
                    <div key={crypto.randomUUID()} class="tag">
                      {post.postingName}
                      <span
                        class="material-symbols-outlined"
                        style={{ fontSize: '16px', cursor: 'pointer' }}
                        onClick={() => {
                          const index = recent_postings.indexOf(post)

                          setRecentPostings((prev) => {
                            const newPost = prev
                            newPost.splice(index, 1)

                            return [...newPost]
                          })
                        }}
                      >
                        close
                      </span>
                    </div>
                  )
                })
              }
            </div>
            <div className='form-group full-width'>
              <button
                /* style={{ margin: 'auto' }} */
                className='btn-primary'
                type='button'
                onClick={addNewPosting}
              >
                Add posting
              </button>
            </div>

          </div>
        </div>
        <div class="form-section">
          <h2 class="section-title">Research Interests</h2>
          <div
            class="form-group full-width"
            onFocus={() => {
              setShowResAdd(true)
            }}
          >
            <label>Select Areas of Interest</label>
            <div
              class="tags-container"
            >
              {
                research_interests.map((res) => {
                  return <div key={crypto.randomUUID()} class="tag">
                    {res}
                    <span
                      class="material-symbols-outlined"
                      style={{ fontSize: '16px', cursor: 'pointer' }}
                      onClick={() => {
                        const index = research_interests.indexOf(res)

                        setResearchIntrests((prev) => {
                          const newRes = prev
                          newRes.splice(index, 1)

                          return [...newRes]
                        })
                      }}
                    >
                      close
                    </span>
                  </div>
                })
              }
              {
                research_interests.length < 3 ?
                  <input
                    placeholder="Add more..."
                    style={{ border: 'none', background: 'transparent', padding: '4px', outline: 'none', flex: '1' }}
                    type="text"
                    ref={researchInputElem}

                  />
                  : ''
              }
              {
                showResAdd && research_interests.length < 3 ?
                  <button
                    type='button'
                    className='add-btn'
                    onClick={() => {
                      const newResInt = researchInputElem.current.value

                      if (!newResInt) {
                        return
                      }

                      if (newResInt && research_interests.length < 3) {
                        setResearchIntrests((prev) => [newResInt, ...prev])
                        researchInputElem.current.value = ''
                      }

                    }}
                  >
                    Add
                  </button>
                  : ''
              }
            </div>
          </div>
        </div>
        <button class="submit-btn" type="submit">Submit Registration</button>
        {/* <Link to={'/members/reg-success'}>reg success</Link>
        <Link to={'/dashboard'}>dashboard</Link> */}
      </form>
    </main>
  );
};