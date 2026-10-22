import './EditProfile.css';
import arrowBack from '../../../assets/icons/left-arrow.svg'
import close from '../../../assets/icons/close-2.svg'
import { useActionState, useContext, useEffect, useRef, useState } from 'react';
import { LGAs } from '../../../Utils/data';
import { AuthContext } from '../../../MyContexts/AuthContext';
import Footer from '../../../Shared/Footer';
import Nav from '../../../Shared/Nav';
import { Link, useNavigate, useNavigation } from 'react-router';
import { UiContext } from '../../../MyContexts/UiContext';
import Redirect from '../../../Redirect';
import dayjs from 'dayjs';

export default function EditProfile() {

  const {
    myDetails,
    editProfile,
    setRecentPostings,
    recent_postings,
    setResearchIntrests,
    research_interests,
    updtAvatar
  } = useContext(AuthContext)

  const {
    setModal,
    hideModal,
    showPopup
  } = useContext(UiContext)

  const [avatar, setAvatar] = useState({})

  const [editState, editAction, isEditing] = useActionState(editProfile, { success: null, message: '' })

  const [addState, addAction, isAdding] = useActionState(addPstng, null)

  const [updtAvatarState, updtAvatarAction, isUpdating] = useActionState(updtAvatar, null)

  const nav = useNavigate()

  const addResIntrstElem = useRef(null)

  const {
    LGA,
    NANMS_uid,
    avatar_url,
    bio,
    date_admited,
    email,
    fullname,
    level,
    phone,
    recent_postings: recPos,
    research_interests: resInts
  } = myDetails

  //const navigate = useNavigation()

  useEffect(() => {
    if (isUpdating) {
      showPopup('pending', 'updating your avatar')
    }
  }, [isUpdating])

  useEffect(() => {
    if (isEditing) {
      showPopup('pending', 'Editing details')
    }
  }, [isEditing])

  useEffect(() => {
    (() => {
      if (recPos) {
        setRecentPostings(recPos)
      }

      if (resInts) {
        setResearchIntrests(resInts)
      }
    })()
  }, [recPos])

  useEffect(() => {

    if (editState.success) {
      showPopup('success', `${editState.message}. You will be redirected to the dashboard in 5 seconds.`)
      setTimeout(() => {
        nav('/members/dashboard')
      }, 5000);
      
    }

    if (editState.success === false) {
      showPopup('err', `${editState.message}. Please wait a few minutes and try again.`)
    }
  }, [editState.success])

  function addPstng(prev, input) {
    const enteries = Object.fromEntries(input)

    setRecentPostings((prev) => {
      return [enteries, ...prev,]
    })
  }

  function addResIntrst() {

    if (!addResIntrstElem.current.value) {
      const msg = 'please type in something or cancel the operation'
      showPopup('err', msg)
      return
    }

    if (research_interests.length >= 3) {
      const msg = 'You have reached the maximum limit'
      showPopup('err', msg)
    }

    setResearchIntrests((p) => {
      return [addResIntrstElem.current.value, ...(p || [])]
    })
  }


  function confirmCancel() {
    setRecentPostings([])
    setResearchIntrests([])
    nav('/members/dashboard')
    hideModal()
  }

  return (
   </* Redirect pathName={'edit-profile'} */>
      <Nav currentPage={'db'} />
      <main class="container db-main">
        <Link to={'/members/dashboard'}>
          <img
            style={{
              width: '34px',
              border: '2px solid var(--primary)',
              padding: '6px',
              borderRadius: '50%'
            }}
            src={arrowBack}
            alt=""
          />
        </Link>
        <h1 class="edit-prfl-page-title">Edit Profile</h1>
        <div class="edit-prfl-form-card">
          <div class="profile-header">
            <img alt="Profile Photo" class="profile-photo"
              src={avatar_url} />
            <form style={{ display: 'flex', flexDirection: 'column' }} action={updtAvatarAction}>
              <label style={{ display: 'flex', flexDirection: 'column' }} htmlFor='chng-avtr'>
                <h3
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: '18px', fontWeight: '600', color: '#191c1d', marginBottom: '8px', marginTop: '0' }}>
                  Profile Picture</h3>
                <p style={{ fontSize: '14px', color: '#4c616c', marginBottom: '16px', marginTop: '0' }}>{avatar.name || 'Choose New Avatar'}</p>
                <input
                  type="file"
                  name="avatar"
                  id="chng-avtr"
                  style={{
                    display: 'none'
                  }}
                  onChange={(e) => {
                    if (e.target.files[0].size) {
                      setAvatar(e.target.files[0])
                    }
                  }}
                />
              </label>
              <button htmlFor='chng-avtr' class="upload-btn">Upload</button>
            </form>
          </div>
          <form action={editAction}>
            <div class="edit-prfl-form-section">
              <h2 class="edit-prfl-section-title">Personal Information</h2>
              <div class="edit-prfl-form-grid">
                <div class="edit-prfl-form-group">
                  <label class="edit-prfl-form-label" for="fullName">Full Name</label>
                  <input class="edit-prfl-form-input" name='fullname' id="fullName" type="text" defaultValue={fullname} />
                </div>
                <div class="edit-prfl-form-group">
                  <label class="edit-prfl-form-label" for="email">Email Address</label>
                  <input class="edit-prfl-form-input" name='email' id="email" type="email" defaultValue={email} />
                </div>
                <div class="edit-prfl-form-group">
                  <label class="edit-prfl-form-label" for="phone">Phone Number</label>
                  <input class="edit-prfl-form-input" name='phone' id="phone" type="tel" defaultValue={phone} />
                </div>
                {/* <div class="edit-prfl-form-group">
                <label class="edit-prfl-form-label" for="dob">Date of Birth</label>
                <input class="edit-prfl-form-input" id="dob" type="date" defaultValue={} />
              </div> */}
              </div>
            </div>
            <div class="edit-prfl-form-section">
              <h2 class="edit-prfl-section-title">Academic Details</h2>
              <div class="edit-prfl-form-grid">
                <div class="edit-prfl-form-group">
                  <label class="edit-prfl-form-label" for="medSchool">LGA</label>
                  <select name='LGA' defaultValue={LGA} class="edit-prfl-form-select" id="medSchool">
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
                <div class="edit-prfl-form-group">
                  <label class="edit-prfl-form-label" for="admissionYear">Admission Date</label>
                  <input class="edit-prfl-form-input" name='date_admitted' id="admissionYear" type="date" defaultValue={dayjs(date_admited).format('YYYY-MM-DD')} />
                </div>
                <div class="edit-prfl-form-group">
                  <label class="edit-prfl-form-label" for="level">Current Level</label>
                  <select defaultValue={level} name='level' class="edit-prfl-form-select" id="level">
                    <option>100 Level</option>
                    <option>200 Level</option>
                    <option>300 Level</option>
                    <option>400 Level</option>
                    <option>500 Level</option>
                    <option>600 Level</option>
                  </select>
                </div>
                <div class="edit-prfl-form-group">
                  <label class="edit-prfl-form-label" for="nanms-Id">NANMS ID</label>
                  <input class="edit-prfl-form-input" name='NANMS_uid' id="nanms-Id" type="text" defaultValue={NANMS_uid} disabled />
                </div>
              </div>
            </div>
            <div class="edit-prfl-form-section">
              <h2 class="edit-prfl-section-title">Recent Postings</h2>
              <div class="edit-prfl-form-group full-width">
                <div class="checkbox-grid">
                  {
                    recent_postings?.length
                      ? recent_postings.map((r) => {

                        return (
                          <div key={crypto.randomUUID()} class="tag">
                            {r.postingName}
                            <img
                              src={close}
                              class="material-symbols-outlined"
                              style={{ width: '20px', cursor: 'pointer' }}
                              onClick={() => {
                                const index = recent_postings.indexOf(r)

                                setRecentPostings((prev) => {
                                  const newPost = prev
                                  newPost.splice(index, 1)

                                  return [...newPost]
                                })
                              }}
                            />
                          </div>
                        )
                      })
                      : <p style={{ width: '100%', textAlign: 'center', color: 'grey' }}>None selected</p>
                  }
                </div>
                <button
                  style={{
                    padding: '10px 14px',
                    backgroundColor: 'var(--primary)',
                    marginTop: '18px',
                    borderRadius: '8px',
                    color: 'white'
                  }}
                  type='button'
                  onClick={() => {

                    setModal({
                      show: true,
                      header: 'Add New Posting',
                      id: 'add-post',
                      body: <form id='add-post' action={addAction}>
                        <div class="form-group">
                          <label for="posting-name">Name</label>
                          <input style={{ height: '30px' }} name='postingName' id="posting-name" placeholder="Rotation or Posting Name" type="text" required />
                        </div>
                        <div class="form-group">
                          <label for="depertment">Depertment(s)</label>
                          <input style={{ height: '30px' }} name='postingDepartments' id="depertment" placeholder="e.g. Surgery, Medicine" type="text" required />
                        </div>
                        <div class="form-group">
                          <label for="duration">Duration</label>
                          <input style={{ height: '30px' }} name='postingDuration' id="duration" placeholder="e.g. 12 Weeks" type="text" required />
                        </div>
                        <div class="form-group">
                          <label for="status">Status</label>
                          <select 
                          style={{ height: '30px' }} 
                          name='postingStatus' 
                          id="status"  
                          defaultValue={'Competed'}
                          >
                            <option value="Completed">Completed</option>
                            <option value="Onging">Ongoing</option>
                            <option value="Upcoming">Upcoming</option>
                          </select>
                        </div>
                      </form>, action: null, actionBtnText: 'Add'
                    })
                  }}
                >
                  Add More
                </button>
              </div>
            </div>
            <div class="edit-prfl-form-section">
              <h2 class="edit-prfl-section-title">Bio / Summary</h2>
              <div class="edit-prfl-form-group full-width">
                <label class="edit-prfl-form-label" for="bio">Bio</label>
                <textarea class="edit-prfl-form-input" id="bio"
                  placeholder="Write a short summary about your medical journey..." name='bio' defaultValue={bio}></textarea>
              </div>
            </div>
            <div class="edit-prfl-form-section">
              <h2 class="edit-prfl-section-title">Professional Interests</h2>
              <div class="edit-prfl-form-group full-width">
                <label class="edit-prfl-form-label">Select areas of interest (Max 3)</label>
                <div style={{ marginTop: '20px' }} class="checkbox-grid">
                  {
                    research_interests?.length
                      ? research_interests.map((r) => {
                        return (
                          <div key={crypto.randomUUID()} class="tag">
                            {r}
                            <img
                              src={close}
                              class="material-symbols-outlined"
                              style={{ width: '20px', cursor: 'pointer' }}
                              onClick={() => {
                                const index = research_interests.indexOf(r)

                                setResearchIntrests((prev) => {
                                  const newRes = prev
                                  newRes.splice(index, 1)

                                  return [...newRes]
                                })
                              }}
                            />
                          </div>
                        )
                      })
                      : <p style={{ width: '100%', textAlign: 'center', color: 'grey' }}>None selected</p>
                  }
                </div>
                <button style={{
                  padding: '10px 14px',
                  backgroundColor: 'var(--primary)',
                  marginTop: '18px',
                  borderRadius: '8px',
                  color: 'white'
                }}
                  onClick={() => {
                    setModal({
                      show: true,
                      header: 'Add Research Interest',
                      body: <form>
                        <div class="form-group">
                          <input
                            placeholder="Add more..."
                            style={{ border: '1px solid grey', background: 'transparent', padding: '4px', height: '36px' }}
                            type="text"
                            ref={addResIntrstElem}
                          />
                        </div>
                      </form>, action: addResIntrst, actionBtnText: 'Add'
                    })
                  }}
                  type='button'>
                  Add More
                </button>
              </div>
            </div>
            <div class="edit-prfl-form-actions">
              <button
                class="edit-prfl-btn-secondary"
                type="button"
                onClick={() => {
                  setModal({
                    show: true,
                    header: 'Go Back?',
                    body: <p>
                      Are you sure you sure you want to cancel?
                    </p>,
                    actionBtnText: 'Yes',
                    action: confirmCancel,
                    closeBtnText: 'No'
                  })
                }}
              >
                Cancel
              </button>
              <button class="edit-prfl-btn-primary" type="submit">Save Changes</button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </ /* Redirect */>
  );
};