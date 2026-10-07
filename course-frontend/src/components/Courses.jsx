import { useEffect, useState } from "react";
import { getCourses } from "../services/courseApi";

export default function Courses() {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        let ignore = false;

        async function fetchCourses() {
            try {
                setLoading(true);
                setError("");

                const response = await getCourses();

                if (!ignore) {
                    setCourses(response.data);
                }
            } catch (error) {
                console.error("Error loading courses:", error);

                if (!ignore) {
                    setError(
                        "Unable to load courses. Check the backend and try again."
                    );
                }
            } finally {
                if (!ignore) {
                    setLoading(false);
                }
            }
        }

        fetchCourses();

        return () => {
            ignore = true;
        };
    }, []);

    if (loading) {
        return (
            <section>
                <h2>Course Management</h2>
                <p>Loading courses...</p>
            </section>
        );
    }

    if (error) {
        return (
            <section>
                <h2>Course Management</h2>
                <p className="error-message">{error}</p>
            </section>
        );
    }

    if (courses.length === 0) {
        return (
            <section>
                <h2>Course Management</h2>
                <p>No courses available.</p>
                <p>Total courses: 0</p>
            </section>
        );
    }

    return (
        <section>
            <h2>Course Management</h2>

            <p>
                Total courses: <strong>{courses.length}</strong>
            </p>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Code</th>
                        <th>Title</th>
                        <th>Credits</th>
                    </tr>
                </thead>

                <tbody>
                    {courses.map((course) => (
                        <tr key={course.id}>
                            <td>{course.id}</td>
                            <td>{course.code}</td>
                            <td>{course.title}</td>
                            <td>{course.credits}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}