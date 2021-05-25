package com.test.model;

import javax.persistence.*;

@Entity
@Table(name = "post")
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "post_id")
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "ask_id", referencedColumnName = "user_id")
    private User ask;

    @Column(name = "title")
    private String title;

    @Column(name = "content")
    private String content;

    @Column(name = "content_answer")
    private String contentAnswer;

    @Column(name = "post_type")
    private String postType;

    @Column(name = "post_time")
    private String postTime;

    @ManyToOne
    @JoinColumn(name = "answer_id", referencedColumnName = "user_id")
    private User answer;

    @Column(name = "status")
    private String status;


    public User getAsk() {
        return ask;
    }

    public void setAsk(User ask) {
        this.ask = ask;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getPostType() {
        return postType;
    }

    public void setPostType(String postType) {
        this.postType = postType;
    }

    public String getPostTime() {
        return postTime;
    }

    public void setPostTime(String postTime) {
        this.postTime = postTime;
    }

    public User getAnswer() {
        return answer;
    }

    public void setAnswer(User answer) {
        this.answer = answer;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getContentAnswer() {
        return contentAnswer;
    }

    public void setContentAnswer(String contentAnswer) {
        this.contentAnswer = contentAnswer;
    }
}
