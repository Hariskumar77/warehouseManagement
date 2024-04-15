package com.bosch.whm.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="Robot_Logs3")
public class RobotLogs {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int id;
    private Date startTime;
    private Date endTime;
    private int accessedLocationID;
    private double capacityUsed;

    @ManyToOne
    @JoinColumn(name = "robot_id", referencedColumnName ="id")
    private Robot robot;

    public RobotLogs() {
        super();
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

   
    public Date getStartTime() {
        return startTime;
    }

    public void setStartTime(Date startTime) {
        this.startTime = startTime;
    }

    public Date getEndTime() {
        return endTime;
    }

    public void setEndTime(Date endTime) {
        this.endTime = endTime;
    }

    public int getAccessedLocationID() {
        return accessedLocationID;
    }

    public void setAccessedLocationID(int accessedLocationID) {
        this.accessedLocationID = accessedLocationID;
    }

    public double getCapacityUsed() {
        return capacityUsed;
    }

    public void setCapacityUsed(double capacityUsed) {
        this.capacityUsed = capacityUsed;
    }

    public Robot getRobot() {
        return robot;
    }

    public void setRobot(Robot robot) {
        this.robot = robot;
    }
}
