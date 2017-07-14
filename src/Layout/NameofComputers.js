import React from 'react'
import {onChange, submitScore} from '../Events/Events'

function SubmintBtn (props) {
  let computerNumber = 0
  if (computerNumber < props.numberOfComputers) {
    return <input type='submit' className='submit-btn' value='Next Computer' />
  } else {
    return <input type='submit' className='submit-btn' value='Submit for Score' onClick={submitScore} />
  }
}

function ComputersInputPage () {
  return (
    <div className='computer-diagnostics'>
      <div className='computer names'>
        <label>Name of Computer</label>
        <input type='text' name='nameofcomputer' onChange={onChange} className='computer-name' />
      </div>
      <div className='virus check'>
        <lable>Check for Virus Updates:</lable>
        <input className='virus-input' type='text' name='virus' onChange={onChange} placeholder='Enter "updated", "needs updates" or "none"' />
      </div>
      <div className='disk-space check'>
        <lable>Percentage of free disk space:</lable>
        <input className='disk-space-input' type='text' name='disk-space' onChange={onChange} placeholder='Enter the percentage of free disk space' />
      </div>
      <div className='temp-files check'>
        <lable>Check and clean up temp files:</lable>
        <input className='temp-files-input' type='text' name='temp-files' onChange={onChange} placeholder='Enter the size of temp files' />
      </div>
      <div className='defrag check'>
        <lable>Defrag disk and check for fragmentation:</lable>
        <input className='degrag-input' type='text' name='defrag' onChange={onChange} placeholder='Enter the amount the dirve is fragmented' />
      </div>
      <div className='clean-pc check'>
        <lable>Inspect and clean inside of Pc</lable>
        <input className='degrag-input' type='text' name='clean-pc' onChange={onChange} placeholder='Enter yes if cleaned, no if not' />
      </div>
      <div className='updates check'>
        <lable>Check and run updates for computer:</lable>
        <input className='updates-input' type='text' name='updates' onChange={onChange} placeholder='Enter number of updates' />
      </div>
      <div className='malware check'>
        <lable>Check computer for malware</lable>
        <input className='malware-input' type='text' name='malware' onChange={onChange} placeholder='Enter yes if viruses found, no if not' />
      </div>
      <div className='hard-drive check'>
        <lable>Check health of hard drive:</lable>
        <input className='hard-drive-input' type='text' name='hard-drive' onChange={onChange} placeholder='Enter NPF or NFT' />
      </div>
      <div className='event-logs check'>
        <lable>Check Event Logs:</lable>
        <input className='event-logs-input' type='text' name='event-logs' onChange={onChange} placeholder='Enter NPF or NFT' />
      </div>
      <div className='system-file-check check'>
        <lable>Check System File Corruptions:</lable>
        <input className='system-file-input' type='text' name='system-file' onChange={onChange} placeholder='Enter NPF or NFT' />
      </div>
      <div className='server-backups check'>
        <lable>Check Server Backups:</lable>
        <input className='server-backups-input' type='text' name='server-backups' onChange={onChange} placeholder='Enter NPF, NFT or NA' />
      </div>
      {SubmintBtn(window.appState)}
      <p>NPF = No problems found, NFT = Needs further Troubleshooting, NA = not applicable.</p>
    </div>
  )
}

export default ComputersInputPage
