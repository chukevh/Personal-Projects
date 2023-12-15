public class Student {
    private String name;
    private String id;
    private String email;

    Student (String name, String id, String email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    public String getName() {
        return this.name;
    }

    public String getId() {
        return this.id;
    }

    public String getEmail() {
        return this.email;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public static void main(String[] args) {
        Student e = new Student("Erica", "101", "erica.xg@gmail.com");
        System.out.println(e.getName());
    }
}
