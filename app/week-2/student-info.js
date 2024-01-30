// app/week-2/student-info.js
import Link from 'next/link';

export default function StudentInfo() {
  return (
    <div>
      <p>Noorinder Singh</p>
      <p>
        Link to my GitHub Repository:{' '}
        <Link href="https://github.com/Noor-brar/cprg306-assignments.git" passHref>
          <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>
            https://github.com
          </span>
        </Link>
      </p>
    </div>
  );
}
